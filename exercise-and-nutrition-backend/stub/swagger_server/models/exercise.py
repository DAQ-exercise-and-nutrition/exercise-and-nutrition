# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class Exercise(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, name: str=None, body_part: str=None, equipment: str=None, target: str=None, instructions: str=None):  # noqa: E501
        """Exercise - a model defined in Swagger

        :param name: The name of this Exercise.  # noqa: E501
        :type name: str
        :param body_part: The body_part of this Exercise.  # noqa: E501
        :type body_part: str
        :param equipment: The equipment of this Exercise.  # noqa: E501
        :type equipment: str
        :param target: The target of this Exercise.  # noqa: E501
        :type target: str
        :param instructions: The instructions of this Exercise.  # noqa: E501
        :type instructions: str
        """
        self.swagger_types = {
            'name': str,
            'body_part': str,
            'equipment': str,
            'target': str,
            'instructions': str
        }

        self.attribute_map = {
            'name': 'name',
            'body_part': 'body_part',
            'equipment': 'equipment',
            'target': 'target',
            'instructions': 'instructions'
        }
        self._name = name
        self._body_part = body_part
        self._equipment = equipment
        self._target = target
        self._instructions = instructions

    @classmethod
    def from_dict(cls, dikt) -> 'Exercise':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Exercise of this Exercise.  # noqa: E501
        :rtype: Exercise
        """
        return util.deserialize_model(dikt, cls)

    @property
    def name(self) -> str:
        """Gets the name of this Exercise.


        :return: The name of this Exercise.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name: str):
        """Sets the name of this Exercise.


        :param name: The name of this Exercise.
        :type name: str
        """

        self._name = name

    @property
    def body_part(self) -> str:
        """Gets the body_part of this Exercise.


        :return: The body_part of this Exercise.
        :rtype: str
        """
        return self._body_part

    @body_part.setter
    def body_part(self, body_part: str):
        """Sets the body_part of this Exercise.


        :param body_part: The body_part of this Exercise.
        :type body_part: str
        """

        self._body_part = body_part

    @property
    def equipment(self) -> str:
        """Gets the equipment of this Exercise.


        :return: The equipment of this Exercise.
        :rtype: str
        """
        return self._equipment

    @equipment.setter
    def equipment(self, equipment: str):
        """Sets the equipment of this Exercise.


        :param equipment: The equipment of this Exercise.
        :type equipment: str
        """

        self._equipment = equipment

    @property
    def target(self) -> str:
        """Gets the target of this Exercise.


        :return: The target of this Exercise.
        :rtype: str
        """
        return self._target

    @target.setter
    def target(self, target: str):
        """Sets the target of this Exercise.


        :param target: The target of this Exercise.
        :type target: str
        """

        self._target = target

    @property
    def instructions(self) -> str:
        """Gets the instructions of this Exercise.


        :return: The instructions of this Exercise.
        :rtype: str
        """
        return self._instructions

    @instructions.setter
    def instructions(self, instructions: str):
        """Sets the instructions of this Exercise.


        :param instructions: The instructions of this Exercise.
        :type instructions: str
        """

        self._instructions = instructions
