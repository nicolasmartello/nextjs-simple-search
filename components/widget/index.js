/*------------------------------------------------*/
/* COMPONENTS
/*------------------------------------------------*/
import WidgetAction from './actions';
/*------------------------------------------------*/
/* STYLES
/*------------------------------------------------*/
import widgetStyles from '../../styles/Widget.module.scss';
import GlobalStyles from '../../styles/Global.module.scss';
/*------------------------------------------------*/
/* SVG FILES
/*------------------------------------------------*/
import FileSvg from '../../public/assets/clipboard.svg';

const Widget = ({
  title,
  description,
  buttonConfig,
  actionsConfig,
  displayActions = false
}) => {
  const { 
    label: btnLabel,
    click: btnClick
  } = buttonConfig;
  const {
    onDownloadAction,
    onPrintAction,
    onDeleteAction
  } = actionsConfig;

  return (
    <div
      className={widgetStyles.container}
    >
      {displayActions && (
        <WidgetAction
          onDownloadAction={onDownloadAction}
          onDeleteAction={onDeleteAction}
          onPrintAction={onPrintAction}
        />
      )}
      <div className={widgetStyles.mainIcon} >
        <FileSvg/>
      </div>
      {title && (
        <h2 className={GlobalStyles.header2}>{title}</h2>
      )}
      {description && (
        <p className={GlobalStyles.paragraph}>{description}</p>
      )}
      {btnLabel && btnClick && (
        <button
          className={`${GlobalStyles.btn} ${GlobalStyles.btnGhostPrimary}`}
          type="button"
          onClick={btnClick}
        >
          {btnLabel}
        </button>
      )}
    </div>
  );
}

export default Widget;