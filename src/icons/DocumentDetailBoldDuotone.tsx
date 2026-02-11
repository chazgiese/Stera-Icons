import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentDetailBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DocumentDetailBoldDuotone = memo(
  forwardRef<SVGSVGElement, DocumentDetailBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="document-detail-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12.17 2c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.79l3.63 3.63c.31.3.59.57.79.9a3 3 0 0 1 .36.87c.09.37.08.75.08 1.2v6.37q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 17.43 4 16.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM9.8 4c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 6 7.8v8.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V11h-2.8q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V4zM13 6.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h2.74l-.09-.2a4 4 0 0 0-.5-.53l-3.62-3.63a4 4 0 0 0-.54-.5L13 4.07z" clipRule="evenodd" opacity={.4} />
        <path d="M14.5 15.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2zM14.5 12.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

DocumentDetailBoldDuotone.displayName = 'DocumentDetailBoldDuotone';

// Triple export pattern (lucide-react style)
export { DocumentDetailBoldDuotone, DocumentDetailBoldDuotone as DocumentDetailBoldDuotoneIcon, DocumentDetailBoldDuotone as SiDocumentDetailBoldDuotone };
export default DocumentDetailBoldDuotone;
export type { DocumentDetailBoldDuotoneProps };
