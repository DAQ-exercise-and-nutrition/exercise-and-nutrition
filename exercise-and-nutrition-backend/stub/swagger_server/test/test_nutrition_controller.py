# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.nutrition import Nutrition  # noqa: E501
from swagger_server.test import BaseTestCase


class TestNutritionController(BaseTestCase):
    """NutritionController integration test stubs"""

    def test_controller_get_nutrition(self):
        """Test case for controller_get_nutrition

        Get a list of all nutrition recommendations
        """
        query_string = [('limit', 2),
                        ('randomize', true)]
        response = self.client.open(
            '/exercise-and-nutrition-api/v3/nutrition',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_controller_get_nutrition_by_goal(self):
        """Test case for controller_get_nutrition_by_goal

        Get nutrition recommendations for a specific goal
        """
        query_string = [('limit', 2),
                        ('randomize', true)]
        response = self.client.open(
            '/exercise-and-nutrition-api/v3/nutrition/goal/{goal}'.format(goal='goal_example'),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
