# coding: utf-8

import sys
from setuptools import setup, find_packages

NAME = "swagger_server"
VERSION = "1.0.0"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = [
    "connexion",
    "swagger-ui-bundle>=0.0.2"
]

setup(
    name=NAME,
    version=VERSION,
    description="A guide to exercise and nutrition",
    author_email="",
    url="",
    keywords=["Swagger", "A guide to exercise and nutrition"],
    install_requires=REQUIRES,
    packages=find_packages(),
    package_data={'': ['swagger/swagger.yaml']},
    include_package_data=True,
    entry_points={
        'console_scripts': ['swagger_server=swagger_server.__main__:main']},
    long_description="""\
    Data that provide information of exercise for each body part, food data that provide nutrition and calorie of food, reps/set data that provide information about how many reps you should play or how many set and rest between set following each condition, nutrition data that following the goal that user needed for example if user need to increase muscle you should eat high-protein food
    """
)
