import connexion
import six

from swagger_server.models.nutrition import Nutrition  # noqa: E501
from swagger_server import util


def controller_get_nutrition(limit=None, randomize=None):  # noqa: E501
    """Get a list of all nutrition recommendations

     # noqa: E501

    :param limit: 
    :type limit: int
    :param randomize: 
    :type randomize: bool

    :rtype: List[Nutrition]
    """
    return 'do some magic!'


def controller_get_nutrition_by_goal(goal, limit=None, randomize=None):  # noqa: E501
    """Get nutrition recommendations for a specific goal

     # noqa: E501

    :param goal: 
    :type goal: str
    :param limit: 
    :type limit: int
    :param randomize: 
    :type randomize: bool

    :rtype: List[Nutrition]
    """
    return 'do some magic!'
