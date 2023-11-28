# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.reps_set import RepsSet  # noqa: E501
from swagger_server.test import BaseTestCase


class TestRepsSetController(BaseTestCase):
    """RepsSetController integration test stubs"""

    def test_controller_get_reps_set(self):
        """Test case for controller_get_reps_set

        Get a list of all reps set recommendations
        """
        query_string = [('limit', 2),
                        ('randomize', true)]
        response = self.client.open(
            '/exercise-and-nutrition-api/v3/reps_set',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_controller_get_reps_set_by_goal(self):
        """Test case for controller_get_reps_set_by_goal

        Get reps set recommendations for a specific goal
        """
        query_string = [('limit', 2),
                        ('randomize', true)]
        response = self.client.open(
            '/exercise-and-nutrition-api/v3/reps_set/goal/{goal}'.format(goal='goal_example'),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
