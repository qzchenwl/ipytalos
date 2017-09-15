#!/bin/bash

python setup.py build
pip install -e .
jupyter nbextension install --py --symlink --sys-prefix ipytalos
jupyter nbextension enable --py --sys-prefix ipytalos

jupyter notebook
