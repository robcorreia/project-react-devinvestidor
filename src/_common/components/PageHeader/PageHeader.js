import PageHeaderView from './PageHeaderView';

const PageHeader = ({title, actionButton}) => {
  document.title = `Task Organize -  ${title}`

  return <PageHeaderView {...{title, actionButton}}/>;
};

export default PageHeader;
