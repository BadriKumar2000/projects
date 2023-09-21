import { Component } from "react";
import "./tabitem.css";

class TabItem extends Component {
  onChangeActiveTabId = () => {
    const { tabDetails, changeActiveTab } = this.props;
    const { tabId } = tabDetails;
    changeActiveTab(tabId);
  };

  render() {
    const { tabDetails, activeTabId } = this.props;
    const { displayText, tabId } = tabDetails;
    const sameTab = tabId === activeTabId;
    let classname = "";
    if (sameTab) {
      classname = "tab-btn active-tab-btn";
    } else {
      classname = "tab-btn";
    }
    return (
      <li className="tab-item-container" onClick={this.onChangeActiveTabId}>
        <button type="button" className={classname}>
          {displayText}
        </button>
      </li>
    );
  }
}

export default TabItem;
