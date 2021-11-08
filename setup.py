from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in mentormentee/__init__.py
from mentormentee import __version__ as version

setup(
	name="mentormentee",
	version=version,
	description="This is a student and faculty management system.",
	author="SDC",
	author_email="technogeek13559@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
