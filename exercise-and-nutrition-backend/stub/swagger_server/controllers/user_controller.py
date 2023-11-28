import connexion
import six

from swagger_server.models.user import User  # noqa: E501
from swagger_server import util


def controller_get_users(limit=None, randomize=None):  # noqa: E501
    """Get user recommendations

     # noqa: E501

    :param limit: 
    :type limit: int
    :param randomize: 
    :type randomize: bool

    :rtype: List[User]
    """
    return 'do some magic!'
