# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.user import User  # noqa: E501
from swagger_server.test import BaseTestCase


class TestUserController(BaseTestCase):
    """UserController integration test stubs"""

    def test_controller_get_users(self):
        """Test case for controller_get_users

        Get user recommendations
        """
        query_string = [('limit', 2),
                        ('randomize', true)]
        response = self.client.open(
            '/exercise-and-nutrition-api/v3/users',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
