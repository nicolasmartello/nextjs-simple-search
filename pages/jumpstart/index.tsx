import Nav from '../../components/nav';
import Widget from '../../components/widget';
import widgetStyles from '../../styles/Widget.module.scss';

const DESCRIPTION = "An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors.";
const TITLE = "Corporate Bylaws";
const JumpStart = () => (
  <div className={widgetStyles.widgetContainer}>
    <Widget
      title={TITLE}
      description={DESCRIPTION}
      buttonConfig={{
        label: 'View document',
        click: () => { console.log('click on document') }
      }}
      actionsConfig={{
        onDownloadAction: () => { console.log('click on download') },
        onPrintAction: () => { console.log('click on print') },
        onDeleteAction: () => { console.log('click on delete action') }
      }}
    />

    <Widget
      displayActions
      title={TITLE}
      description={DESCRIPTION}
      buttonConfig={{
        label: 'View document',
        click: () => { console.log('click on document') }
      }}
      actionsConfig={{
        onDownloadAction: () => { console.log('click on download') },
        onPrintAction: () => { console.log('click on print') },
        onDeleteAction: () => { console.log('click on delete action') }
      }}
    />
  </div>
);

export default JumpStart;
