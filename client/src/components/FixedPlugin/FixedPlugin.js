import React from 'react';

// reactstrap components
import { Dropdown, DropdownToggle, Badge } from 'reactstrap';
import { ThemeContext, themes } from 'contexts/ThemeContext';
import { backgroundColors } from 'contexts/BackgroundColorContext';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../reducers/languageSlice';
function FixedPlugin(props) {
    const [dropDownIsOpen, setdropDownIsOpen] = React.useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        setdropDownIsOpen(!dropDownIsOpen);
    };
    const changeLanguages = (LANGUAGES) => {
        dispatch(setLanguage(LANGUAGES));
    };
    return (
        <div className="fixed-plugin">
            <Dropdown isOpen={dropDownIsOpen} toggle={handleClick}>
                <DropdownToggle tag="div">
                    <i className="fa fa-cog fa-2x" />
                </DropdownToggle>
                <ul className="dropdown-menu show">
                    <li className="header-title">SIDEBAR BACKGROUND</li>
                    <li className="adjustments-line">
                        <div className="badge-colors text-center">
                            <Badge
                                color="primary"
                                className={
                                    props.bgColor === backgroundColors.primary
                                        ? 'active'
                                        : ''
                                }
                                onClick={() => {
                                    props.handleBgClick(
                                        backgroundColors.primary,
                                    );
                                }}
                            />{' '}
                            <Badge
                                color="info"
                                className={
                                    props.bgColor === backgroundColors.blue
                                        ? 'active'
                                        : ''
                                }
                                onClick={() => {
                                    props.handleBgClick(backgroundColors.blue);
                                }}
                            />{' '}
                            <Badge
                                color="success"
                                className={
                                    props.bgColor === backgroundColors.green
                                        ? 'active'
                                        : ''
                                }
                                onClick={() => {
                                    props.handleBgClick(backgroundColors.green);
                                }}
                            />{' '}
                        </div>
                    </li>
                    <li className="adjustments-line text-center color-change">
                        <ThemeContext.Consumer>
                            {({ changeTheme }) => (
                                <>
                                    <span className="color-label">
                                        LIGHT MODE
                                    </span>{' '}
                                    <Badge
                                        className="light-badge mr-2"
                                        onClick={() =>
                                            changeTheme(themes.light)
                                        }
                                    />{' '}
                                    <Badge
                                        className="dark-badge ml-2"
                                        onClick={() => changeTheme(themes.dark)}
                                    />{' '}
                                    <span className="color-label">
                                        DARK MODE
                                    </span>{' '}
                                </>
                            )}
                        </ThemeContext.Consumer>
                    </li>
                    <li className="adjustments-line text-center color-change">
                        <ThemeContext.Consumer>
                            {({ changeTheme }) => (
                                <>
                                    <span className="color-label">
                                        VIETNAMESE
                                    </span>{' '}
                                    <Badge
                                        className="light-badge mr-2"
                                        onClick={() => changeLanguages('vi')}
                                    />{' '}
                                    <Badge
                                        className="dark-badge ml-2"
                                        onClick={() => changeLanguages('en')}
                                    />{' '}
                                    <span className="color-label">ENGLISH</span>{' '}
                                </>
                            )}
                        </ThemeContext.Consumer>
                    </li>
                </ul>
            </Dropdown>
        </div>
    );
}

export default FixedPlugin;
