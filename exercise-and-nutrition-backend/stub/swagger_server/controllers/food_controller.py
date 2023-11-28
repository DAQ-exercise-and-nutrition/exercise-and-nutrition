import connexion
import six

from swagger_server.models.food import Food  # noqa: E501
from swagger_server import util


def controller_get_foods(diet=None, meal_type=None, limit=None, randomize=None):  # noqa: E501
    """Get a list of all foods

     # noqa: E501

    :param diet: 
    :type diet: str
    :param meal_type: 
    :type meal_type: str
    :param limit: 
    :type limit: int
    :param randomize: 
    :type randomize: bool

    :rtype: List[Food]
    """
    return 'do some magic!'


def controller_get_foods_by_diet(diet, limit=None, randomize=None):  # noqa: E501
    """Get foods for a specific diet

     # noqa: E501

    :param diet: 
    :type diet: str
    :param limit: 
    :type limit: int
    :param randomize: 
    :type randomize: bool

    :rtype: List[Food]
    """
    return 'do some magic!'


def controller_get_foods_by_meal_type(meal_type, limit=None, randomize=None):  # noqa: E501
    """Get foods for a specific meal type

     # noqa: E501

    :param meal_type: 
    :type meal_type: str
    :param limit: 
    :type limit: int
    :param randomize: 
    :type randomize: bool

    :rtype: List[Food]
    """
    return 'do some magic!'
