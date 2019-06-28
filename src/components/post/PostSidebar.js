import React from 'react';
import { Link } from 'gatsby';

import AuthorIcon from '../../images/tango-author-icon.svg';
import CategoryIcon from '../../images/tango-category-icon.svg';
import DateIcon from '../../images/tango-date-icon.svg';

import { SidebarWrapper, SidebarMenu } from './styles/PostSidebarStyles';

const PostSidebar = ({ date, author, categories }) => (
  <SidebarWrapper className="col-lg-3">
    <SidebarMenu>
      <li className="sidebar-menu-header">
        <img src={DateIcon} alt="tango-date" />
        <span>{date}</span>
      </li>
      <li className="sidebar-menu-header">
        <img src={AuthorIcon} alt="tango-author" />
        <span>{author}</span>
      </li>
      <li className="sidebar-menu-header">
        <img src={CategoryIcon} alt="tango-category" />
        <span>Categories</span>
      </li>
      {/* List all categories which this post belongs to. Also ignore 'alla-trendspaningar' 
      (aka All Trends category) since all posts belong to this cat
      */}
      {categories.map(cat =>
        cat.slug !== 'alla-trendspaningar' ? (
          <li key={cat.id}>
            <Link to={`/trends/${cat.slug}/`}>
              <span dangerouslySetInnerHTML={{ __html: cat.name }} />
            </Link>
          </li>
        ) : null
      )}
    </SidebarMenu>
  </SidebarWrapper>
);

export default PostSidebar;