page('/', projectController.index);
page('/cool', aboutController.index);

page('/project/:id', projectView.readOn);
page();
