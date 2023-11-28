import connexion
import six

from swagger_server.models.reps_set import RepsSet  # noqa: E501
from swagger_server import util


def controller_get_reps_set(limit=None, randomize=None):  # noqa: E501
    """Get a list of all reps set recommendations

     # noqa: E501

    :param limit: 
    :type limit: int
    :param randomize: 
    :type randomize: bool

    :rtype: List[RepsSet]
    """
    return 'do some magic!'


def controller_get_reps_set_by_goal(goal, limit=None, randomize=None):  # noqa: E501
    """Get reps set recommendations for a specific goal

     # noqa: E501

    :param goal: 
    :type goal: str
    :param limit: 
    :type limit: int
    :param randomize: 
    :type randomize: bool

    :rtype: List[RepsSet]
    """
    return 'do some magic!'
