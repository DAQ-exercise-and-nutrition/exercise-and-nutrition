import connexion
import six

from swagger_server.models.exercise import Exercise  # noqa: E501
from swagger_server import util


def controller_get_exercises(target=None, limit=None, randomize=None):  # noqa: E501
    """Get a list of all exercises

     # noqa: E501

    :param target: 
    :type target: str
    :param limit: 
    :type limit: int
    :param randomize: 
    :type randomize: bool

    :rtype: List[Exercise]
    """
    return 'do some magic!'


def controller_get_exercises_by_body_part(body_part, limit=None, randomize=None):  # noqa: E501
    """Get exercises for a specific body part

     # noqa: E501

    :param body_part: 
    :type body_part: str
    :param limit: 
    :type limit: int
    :param randomize: 
    :type randomize: bool

    :rtype: List[Exercise]
    """
    return 'do some magic!'


def controller_get_exercises_by_target(target, limit=None, randomize=None):  # noqa: E501
    """Get exercises for a specific target

     # noqa: E501

    :param target: 
    :type target: str
    :param limit: 
    :type limit: int
    :param randomize: 
    :type randomize: bool

    :rtype: List[Exercise]
    """
    return 'do some magic!'
