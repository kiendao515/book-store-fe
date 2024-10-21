import 'assets/styles/keen/theme01/layout/header/base/light.css';
import 'assets/styles/keen/theme01/layout/header/menu/dark.css';
import KTBSDropdown, {
  KTBSDropdownAlignments,
} from 'general/components/OtherKeenComponents/KTBSDropdown';
import AppData from 'general/constants/AppData';
import AppResource from 'general/constants/AppResource';
import LanguageHelper from 'general/helpers/LanguageHelper';
import UserHelper from 'general/helpers/UserHelper';
import useRouter from 'hooks/useRouter';
import _ from 'lodash';
// import DropdownAccountMenu from 'modules/Saymee/features/Auth/components/DropdownAccountMenu';
// import OffcanvasSearch from 'modules/Saymee/features/Dashboard/components/OffcanvasSearch';
import moment from 'moment';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import './style.scss';
import DropdownAccountMenu from 'modules/eShip/features/Auth/components/DropdownAccountMenu';

const menuItems = [];

function KT01Header(props) {
  // MARK: --- Params ---
  const { t } = useTranslation();
  const router = useRouter();
  const pathName = router.pathname;
  const arrPathNameItems = _.chain(pathName).split('/').compact().value();
  const headerTitle = _.chain(arrPathNameItems).last().capitalize().value();
  const currentLoggedInUser = useSelector((state) => state.auth?.current);

  // MARK: --- Hooks ---
  useEffect(() => {
    new KTOffcanvas('kt_header_menu_wrapper', {
      baseClass: 'header-menu-wrapper',
      overlay: true,
      // closeBy: '',
      toggleBy: {
        target: 'kt_header_mobile_toggle',
      },
    });

    if (KTMenu !== undefined) {
      new KTMenu('kt_header_menu', {
        submenu: {
          desktop: 'dropdown',
          tablet: 'accordion',
          mobile: 'accordion',
        },
      });
    }
  }, []);

  return (
    <div id="kt_header" className="header header-fixed">
      <div className="container-fluid d-flex align-items-stretch justify-content-between">
        {/* Header menu wrapper */}
        <div id="kt_header_menu_wrapper" className="header-menu-wrapper header-menu-wrapper-left">
          {/* header menu */}
          <div
            id="kt_header_menu"
            className="header-menu header-menu-mobile header-menu-layout-default"
          >
            {/* date & time */}
            <h4
              className="d-flex flex-column align-items-start justify-content-center font-weight-bolder mb-0"
              style={{ color: AppResource.colors.feature }}
            >
              {moment().format('DD/MM/YYYY')}{' '}
              <small className="text-dark mt-1">{t(_.capitalize(moment().format('dddd')))}</small>
            </h4>
            {/* menu nav */}
            <ul className="menu-nav">
              {menuItems.map((item, index) => {
                const hasSubMenuLV1Items = item?.subMenuItems !== undefined;

                return (
                  <li
                    key={index}
                    className="menu-item menu-item-submenu menu-item-rel menu-item-open-dropdown"
                    data-menu-toggle="click"
                  >
                    <a href="#" className="menu-link menu-toggle">
                      <span className="menu-text">{item.text}</span>
                      <i className="menu-arrow" />
                    </a>
                    {/* Sub menu items level 1 */}
                    {hasSubMenuLV1Items && (
                      <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                        <ul className="menu-subnav">
                          {item?.subMenuItems?.map((subItemLV1, subIndexLV1) => {
                            const hasSubMenuLV2Items = subItemLV1?.subMenuItems !== undefined;

                            return (
                              <li
                                key={subIndexLV1}
                                className={`menu-item ${hasSubMenuLV2Items && 'menu-item-submenu'}`}
                                data-menu-toggle="hover"
                              >
                                <a href="#" className="menu-link menu-toggle">
                                  {subItemLV1.icon ? (
                                    <span className="svg-icon menu-icon">
                                      <img alt="" src={subItemLV1.icon} className="w-20px h-20px" />
                                    </span>
                                  ) : (
                                    <i className="menu-bullet menu-bullet-dot">
                                      <span></span>
                                    </i>
                                  )}
                                  <span className="menu-text">{subItemLV1.text}</span>
                                  {subItemLV1?.label && (
                                    <span className="menu-label">
                                      <span className="label label-success label-rounded">
                                        {subItemLV1.label}
                                      </span>
                                    </span>
                                  )}
                                  {hasSubMenuLV2Items && <i className="menu-arrow" />}
                                </a>
                                {/* Sub menu items level 2 */}
                                {hasSubMenuLV2Items && (
                                  <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                    <ul className="menu-subnav">
                                      {subItemLV1?.subMenuItems?.map((subItemLV2, subIndexLV2) => {
                                        const hasSubMenuLV3Items =
                                          subItemLV2?.subMenuItems !== undefined;

                                        return (
                                          <li
                                            key={subIndexLV2}
                                            className={`menu-item ${
                                              hasSubMenuLV3Items && 'menu-item-submenu'
                                            }`}
                                            data-menu-toggle="hover"
                                          >
                                            <a href="#" className="menu-link menu-toggle">
                                              {subItemLV2.icon ? (
                                                <span className="svg-icon menu-icon">
                                                  <img
                                                    alt=""
                                                    src={subItemLV2.icon}
                                                    className="w-20px h-20px"
                                                  />
                                                </span>
                                              ) : (
                                                <i className="menu-bullet menu-bullet-line">
                                                  <span></span>
                                                </i>
                                              )}
                                              <span className="menu-text">{subItemLV2.text}</span>
                                              {subItemLV2?.label && (
                                                <span className="menu-label">
                                                  <span className="label label-success label-rounded">
                                                    {subItemLV2.label}
                                                  </span>
                                                </span>
                                              )}
                                              {hasSubMenuLV3Items && <i className="menu-arrow" />}
                                            </a>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Top bar */}
        <div className="topbar">
          {/* <div className="topbar-item">
            <div
              className="btn btn-icon btn-clean btn-lg mr-1 pulse pulse-primary enable-filter"
              id="ButtonShowOffcanvasSearch"
            >
              <img alt="search" src={AppResource.icons.keens.search} />
              <span className="pulse-ring"></span>
            </div>
          </div> */}
          {/* language */}
          <KTBSDropdown
            toggleElement={
              <div className="topbar-item">
                <div className="btn btn-icon btn-clean btn-lg mr-1">
                  <img
                    alt="icon"
                    src={LanguageHelper.getCurrentLanguageIcon()}
                    className="w-25px h-25px rounded"
                  />
                </div>
              </div>
            }
            // alignment={KTBSDropdownAlignments.end}
            dropdownMenuClassName="dropdown-menu-sm"
            dropdownMenuItems={AppData.languageItems}
            selectedValue={LanguageHelper.getCurrentLanguage()}
            onChange={(newValue) => {
              LanguageHelper.changeLanguage(newValue);
            }}
          />

          <KTBSDropdown
            toggleElement={
              <div className="topbar-item ml-4">
                <div className="d-flex align-items-center cursor-pointer">
                  <div>
                    <span className="text-dark font-weight-bold mr-1">{`${t('Hello')}, `}</span>
                    <span className="text-primary font-weight-bold mr-3">
                      {UserHelper.getDisplayName(currentLoggedInUser)}
                    </span>
                  </div>
                  <div className="btn btn-icon h-40px w-40px p-0 overflow-hidden hover-opacity-60 border-0">
                    <img
                      alt="avatar"
                      src={UserHelper.getAccountAvatar(currentLoggedInUser)}
                      className="h-100 w-100"
                      style={{
                        objectFit: 'cover',
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = AppResource.icons.keens.userBlank;
                      }}
                    />
                  </div>
                </div>
              </div>
            }
            alignment={KTBSDropdownAlignments.end}
            dropdownMenuClassName="py-0"
            contentEl={<DropdownAccountMenu />}
          />
        </div>
      </div>

      {/* Offcanvas search */}
      {/* <OffcanvasSearch
        id="OffcanvasSearch"
        toggleByElementId="ButtonShowOffcanvasSearch"
        position="right"
      /> */}
    </div>
  );
}

export default KT01Header;
