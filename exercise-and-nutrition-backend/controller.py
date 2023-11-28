from swagger_server import models
import sys
from flask import abort, request
import pymysql
from dbutils.pooled_db import PooledDB
from config import OPENAPI_STUB_DIR, DB_HOST, DB_USER, DB_PASSWD, DB_NAME
from urllib.parse import unquote
import random

sys.path.append(OPENAPI_STUB_DIR)

pool = PooledDB(creator=pymysql,
                host=DB_HOST,
                user=DB_USER,
                password=DB_PASSWD,
                database=DB_NAME,
                maxconnections=1,
                blocking=True)


def get_exercises(target=None, body_part=None, limit=None, randomize=False):
    sql_query = """
        SELECT name, body_part, equipment, target, instructions
        FROM Exercise
    """

    if target:
        sql_query += f" WHERE target = '{target}'"
    elif body_part:
        sql_query += f" WHERE body_part = '{body_part}'"

    with pool.connection() as conn, conn.cursor() as cs:
        cs.execute(sql_query)
        results = cs.fetchall()

    if randomize:
        results = random.choices(results, k=len(results))
    if limit:
        results = results[:limit]

    return [
        {
            "name": row[0],
            "body_part": row[1],
            "equipment": row[2],
            "target": row[3],
            "instructions": row[4]
        }
        for row in results
    ]


def get_exercises_by_body_part(body_part, limit=None, randomize=False):
    sql_query = f"""
        SELECT name, body_part, equipment, target, instructions
        FROM Exercise
        WHERE body_part = '{body_part}'
    """
    with pool.connection() as conn, conn.cursor() as cs:
        cs.execute(sql_query)
        results = list(cs.fetchall())
    if randomize:
        results = random.choices(results, k=len(results))
    if limit:
        results = results[:limit]
    return [
        {
            "name": row[0],
            "body_part": row[1],
            "equipment": row[2],
            "target": row[3],
            "instructions": row[4]
        }
        for row in results
    ]


def get_exercises_by_target(target, limit=None, randomize=False):
    sql_query = f"""
        SELECT name, body_part, equipment, target, instructions
        FROM Exercise
        WHERE target = '{target}'
    """

    if randomize:
        sql_query += " ORDER BY RAND()"

    if limit:
        sql_query += f" LIMIT {limit}"

    with pool.connection() as conn, conn.cursor() as cs:
        cs.execute(sql_query)
        results = cs.fetchall()
        return [
            {
                "name": row[0],
                "body_part": row[1],
                "equipment": row[2],
                "target": row[3],
                "instructions": row[4]
            }
            for row in results
        ]


def get_foods(diet=None, meal_type=None, limit=None, randomize=False):
    sql_query = """
        SELECT name, diet, meal_type, cal, fat, carb, protein
        FROM Food
    """

    if diet:
        sql_query += f" WHERE diet = '{diet}'"
    elif meal_type:
        sql_query += f" WHERE meal_type = '{meal_type}'"

    if randomize:
        sql_query += " ORDER BY RAND()"

    if limit:
        sql_query += f" LIMIT {limit}"

    with pool.connection() as conn, conn.cursor() as cs:
        cs.execute(sql_query)
        results = cs.fetchall()
        return [
            {
                "name": row[0],
                "diet": row[1],
                "meal_type": row[2],
                "cal": row[3],
                "fat": row[4],
                "carb": row[5],
                "protein": row[6]
            }
            for row in results
        ]


def get_foods_by_diet(diet, limit=None, randomize=False):
    sql_query = f"""
        SELECT name, diet, meal_type, cal, fat, carb, protein
        FROM Food
        WHERE diet = '{diet}'
    """

    if randomize:
        sql_query += " ORDER BY RAND()"

    if limit:
        sql_query += f" LIMIT {limit}"

    with pool.connection() as conn, conn.cursor() as cs:
        cs.execute(sql_query)
        results = cs.fetchall()
        return [
            {
                "name": row[0],
                "diet": row[1],
                "meal_type": row[2],
                "cal": row[3],
                "fat": row[4],
                "carb": row[5],
                "protein": row[6]
            }
            for row in results
        ]


def get_foods_by_meal_type(meal_type, limit=None, randomize=False):
    sql_query = f"""
        SELECT name, diet, meal_type, cal, fat, carb, protein
        FROM Food
        WHERE meal_type = '{meal_type}'
    """

    if randomize:
        sql_query += " ORDER BY RAND()"

    if limit:
        sql_query += f" LIMIT {limit}"

    with pool.connection() as conn, conn.cursor() as cs:
        cs.execute(sql_query)
        results = cs.fetchall()
        return [
            {
                "name": row[0],
                "diet": row[1],
                "meal_type": row[2],
                "cal": row[3],
                "fat": row[4],
                "carb": row[5],
                "protein": row[6]
            }
            for row in results
        ]


def get_nutrition(limit=None, randomize=False):
    sql_query = """
        SELECT nutrition_id, nutrition_recomend, goal, exercise_recommend
        FROM Nutrition
    """

    if randomize:
        sql_query += " ORDER BY RAND()"

    if limit:
        sql_query += f" LIMIT {limit}"

    with pool.connection() as conn, conn.cursor() as cs:
        cs.execute(sql_query)
        results = cs.fetchall()
        return [
            {
                "nutrition_id": row[0],
                "nutrition_recomend": row[1],
                "goal": row[2],
                "exercise_recommend": row[3]
            }
            for row in results
        ]


def get_nutrition_by_goal(goal, limit=None, randomize=False):
    sql_query = f"""
        SELECT nutrition_id, nutrition_recomend, goal, exercise_recommend
        FROM Nutrition
        WHERE goal = '{goal}'
    """

    if randomize:
        sql_query += " ORDER BY RAND()"

    if limit:
        sql_query += f" LIMIT {limit}"

    with pool.connection() as conn, conn.cursor() as cs:
        cs.execute(sql_query)
        results = cs.fetchall()
        return [
            {
                "nutrition_id": row[0],
                "nutrition_recomend": row[1],
                "goal": row[2],
                "exercise_recommend": row[3]
            }
            for row in results
        ]


def get_reps_set(limit=None, randomize=False):
    sql_query = """
        SELECT reps_id, goal, sets, reps, weight_lifting, rest, stretching
        FROM Reps_set
    """

    if randomize:
        sql_query += " ORDER BY RAND()"

    if limit:
        sql_query += f" LIMIT {limit}"

    with pool.connection() as conn, conn.cursor() as cs:
        cs.execute(sql_query)
        results = cs.fetchall()
        return [
            {
                "reps_id": row[0],
                "goal": row[1],
                "sets": row[2],
                "reps": row[3],
                "weight_lifting": row[4],
                "rest": row[5],
                "stretching": row[6]
            }
            for row in results
        ]


def get_reps_set_by_goal(goal, limit=None, randomize=False):
    sql_query = f"""
        SELECT reps_id, goal, sets, reps, weight_lifting, rest, stretching
        FROM Reps_set
        WHERE goal = '{goal}'
    """

    if randomize:
        sql_query += " ORDER BY RAND()"

    if limit:
        sql_query += f" LIMIT {limit}"

    with pool.connection() as conn, conn.cursor() as cs:
        cs.execute(sql_query)
        results = cs.fetchall()
        return [
            {
                "reps_id": row[0],
                "goal": row[1],
                "sets": row[2],
                "reps": row[3],
                "weight_lifting": row[4],
                "rest": row[5],
                "stretching": row[6]
            }
            for row in results
        ]


def get_users(limit=None, randomize=False):
    sql_query = """
        SELECT user_id, ts, name, gender, age, weight, height, level, goal, target
        FROM User
    """

    if randomize:
        sql_query += " ORDER BY RAND()"

    if limit:
        sql_query += f" LIMIT {limit}"

    with pool.connection() as conn, conn.cursor() as cs:
        cs.execute(sql_query)
        results = cs.fetchall()
        return [
            {
                "user_id": row[0],
                "ts": row[1],
                "name": row[2],
                "gender": row[3],
                "age": row[4],
                "weight": row[5],
                "height": row[6],
                "level": row[7],
                "goal": row[8],
                "target": row[9]
            }
            for row in results
        ]
