import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DocumentDetailBoldProps = Omit<IconBaseProps, 'children'>;

const DocumentDetailBold = memo(
  forwardRef<SVGSVGElement, DocumentDetailBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="document-detail-bold" {...props}>
      <path fill="currentColor" d="M15 16a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zM15 12a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M12.67 1c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.79l4.13 4.13c.31.3.59.57.79.9a3 3 0 0 1 .36.87c.09.37.08.75.08 1.2v7.87q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zM8.8 3c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 5 6.8v10.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V10h-2.8q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V3zM14 5.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h2.38l-.22-.23-4.13-4.13-.23-.22z" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentDetailBold.displayName = 'DocumentDetailBold';

// Triple export pattern (lucide-react style)
export { DocumentDetailBold, DocumentDetailBold as DocumentDetailBoldIcon, DocumentDetailBold as SiDocumentDetailBold };
export default DocumentDetailBold;
export type { DocumentDetailBoldProps };
