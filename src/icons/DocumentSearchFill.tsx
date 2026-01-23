import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DocumentSearchFillProps = Omit<IconBaseProps, 'children'>;

const DocumentSearchFill = memo(
  forwardRef<SVGSVGElement, DocumentSearchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="document-search-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 1.75q1.03-.01 1.7.04.7.04 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7v7.7a4.99 4.99 0 1 0-7.06 7.05H9q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7v-10q-.01-1.03.04-1.7.04-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04zM9 9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0-3.5a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M16 13.75a3.75 3.75 0 0 1 3.26 5.6l1.45 1.44a1 1 0 1 1-1.42 1.42l-1.44-1.45q-.83.48-1.85.49a3.75 3.75 0 1 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

DocumentSearchFill.displayName = 'DocumentSearchFill';

// Triple export pattern (lucide-react style)
export { DocumentSearchFill, DocumentSearchFill as DocumentSearchFillIcon, DocumentSearchFill as SiDocumentSearchFill };
export default DocumentSearchFill;
export type { DocumentSearchFillProps };
