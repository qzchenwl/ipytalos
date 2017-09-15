ipytalos
===============================

A Custom Jupyter Widget Library

Installation
------------

To install use pip:

    $ pip install ipytalos
    $ jupyter nbextension enable --py --sys-prefix ipytalos


For a development installation (requires npm),

    $ git clone https://github.com//ipytalos.git
    $ cd ipytalos
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix ipytalos
    $ jupyter nbextension enable --py --sys-prefix ipytalos
    $ jupyter labextension install ./jslab
