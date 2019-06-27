import React from "react";

import { Link } from "gatsby";

import tangoMail from "../../images/tango-mail-icon.svg";
import tangoPage from "../../images/tango-page-icon.svg";

import {
  SidebarWrapper,
  SidebarMenu,
  EducationBadge,
} from "./styles/PageSidebarStyles";

const PageSidebar = ({ children, parentChildren, currentPage, parent }) => {
  const getParentContent = () => {
    // page with no children, show default text
    return children.edges.length === 0 ? (
      <>
        <li className="sidebar-menu-header">
          <img src={tangoMail} alt="tango-mail" />
          <span>Mail list</span>
        </li>
        <p>
          Do you want to get updated when we publish new trend posts?
          <br />
          Just email us with your name, companyname and mail adress{" "}
          <a href="mailto:anders@tangobrandalliance.se">Anders Lindén</a>
        </p>
      </>
    ) : (
      // page with children
      <>
        <li className="sidebar-menu-header">
          <img src={tangoPage} alt="tango=page" />{" "}
          <span dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        </li>
        {children.edges.map(child => (
          <li key={child.node.id}>
            <Link to={child.node.link}>
              <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
            </Link>
          </li>
        ))}
      </>
    );
  };

  const getChildContent = () => (
    <>
      <li className="sidebar-menu-header">
        <img src={tangoPage} alt="tango-page" />{' '}
        <span dangerouslySetInnerHTML={{ __html: parent.title }} />
      </li>
      {parentChildren.edges.map(child => (
        <li
          key={child.node.id}
          className={
            currentPage.id === child.node.id ? 'sidebar-highlighted' : ''
          }
        >
          {currentPage.id === child.node.id ? (
            <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
          ) : (
            <Link to={child.node.link}>
              <span dangerouslySetInnerHTML={{ __html: child.node.title }} />
            </Link>
          )}
        </li>
      ))}
    </>
  )

  return (
    <SidebarWrapper className="col-lg-3">
      {currentPage.acf.education ? (
        <EducationBadge>
          <a href="mailto:anders@tangobrandalliance.se">Enroll the course</a>
        </EducationBadge>
      ) : null}
      <SidebarMenu>
        {currentPage.wordpress_parent === 0
          ? getParentContent()
          : getChildContent()}
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default PageSidebar;
