var jupyter_talos = require('jupyter-talos');

var jupyterlab_widgets = require('@jupyter-widgets/jupyterlab-manager');

module.exports = {
  id: 'jupyter.extensions.jupyter_talos',
  requires: [jupyterlab_widgets.INBWidgetExtension],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-talos',
          version: jupyter_talos.version,
          exports: jupyter_talos
      });
  },
  autoStart: true
};

