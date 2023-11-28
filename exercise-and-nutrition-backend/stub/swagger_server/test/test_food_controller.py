# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.food import Food  # noqa: E501
from swagger_server.test import BaseTestCase


class TestFoodController(BaseTestCase):
    """FoodController integration test stubs"""

    def test_controller_get_foods(self):
        """Test case for controller_get_foods

        Get a list of all foods
        """
        query_string = [('diet', 'diet_example'),
                        ('meal_type', 'meal_type_example'),
                        ('limit', 2),
                        ('randomize', true)]
        response = self.client.open(
            '/exercise-and-nutrition-api/v3/foods',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_controller_get_foods_by_diet(self):
        """Test case for controller_get_foods_by_diet

        Get foods for a specific diet
        """
        query_string = [('limit', 2),
                        ('randomize', true)]
        response = self.client.open(
            '/exercise-and-nutrition-api/v3/foods/diet/{diet}'.format(diet='diet_example'),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_controller_get_foods_by_meal_type(self):
        """Test case for controller_get_foods_by_meal_type

        Get foods for a specific meal type
        """
        query_string = [('limit', 2),
                        ('randomize', true)]
        response = self.client.open(
            '/exercise-and-nutrition-api/v3/foods/meal_type/{mealType}'.format(meal_type='meal_type_example'),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
