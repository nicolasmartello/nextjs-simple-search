/*------------------------------------------------*/
/* STYLES
/*------------------------------------------------*/
import widgetStyles from '../../../styles/Widget.module.scss';
/*------------------------------------------------*/
/* SVG FILES
/*------------------------------------------------*/
import DotsSvg from '../../../public/assets/ellipsis-v.svg';
import DownloadSvg from '../../../public/assets/download.svg';
import DeleteSvg from '../../../public/assets/garbage.svg';
import PrintSvg from '../../../public/assets/print.svg';

const WidgetAction = ({
  onDownloadAction,
  onPrintAction,
  onDeleteAction,
  displayActions
}) => {
  const listClass = displayActions ? 'show' : 'hidden';
  
  return (
    <div
      className={`${widgetStyles.actionsContainer} ${listClass}`}
    >
      <div className={widgetStyles.dots}>
        <DotsSvg />
      </div>
      <ul>
        {onDownloadAction && (
          <li
            className={widgetStyles.selected}
          >
            <DownloadSvg />
            Download
          </li>
        )}
        {onPrintAction && (
          <li>
            <PrintSvg />
            Print
          </li>
        )}
        {onDeleteAction && (
          <li
            className={widgetStyles.danger}
          >
            <DeleteSvg />
            Delete
          </li>
        )}
      </ul>
    </div>
  );
};

export default WidgetAction;