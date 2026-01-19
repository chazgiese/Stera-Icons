import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DocumentSearchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DocumentSearchFillDuotone = memo(
  forwardRef<SVGSVGElement, DocumentSearchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="document-search-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15 1.75q1.03-.01 1.7.04.7.04 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7v9.02a4.5 4.5 0 1 0-5.73 5.73H9q-1.03.01-1.7-.04a3 3 0 0 1-1.28-.31c-.6-.32-1.1-.81-1.42-1.42q-.28-.59-.31-1.28-.05-.67-.04-1.7v-10q-.01-1.03.04-1.7.04-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04zM9 9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0-3.5a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.5 12.5a4.5 4.5 0 0 1 3.94 6.67l1.94 1.95a1.25 1.25 0 0 1-1.76 1.76l-1.95-1.94q-.97.55-2.17.56a4.5 4.5 0 1 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fill="currentColor" d="M15 9a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM15 5.5a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

DocumentSearchFillDuotone.displayName = 'DocumentSearchFillDuotone';

// Triple export pattern (lucide-react style)
export { DocumentSearchFillDuotone, DocumentSearchFillDuotone as DocumentSearchFillDuotoneIcon, DocumentSearchFillDuotone as SiDocumentSearchFillDuotone };
export default DocumentSearchFillDuotone;
export type { DocumentSearchFillDuotoneProps };
