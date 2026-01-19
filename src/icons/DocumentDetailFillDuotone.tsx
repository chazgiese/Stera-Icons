import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DocumentDetailFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DocumentDetailFillDuotone = memo(
  forwardRef<SVGSVGElement, DocumentDetailFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="document-detail-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.67 1c.45 0 .83 0 1.2.08q.46.12.87.36c.33.2.6.48.9.79l4.13 4.13c.31.3.59.57.79.9a3 3 0 0 1 .36.87c.09.37.08.75.08 1.2v7.87q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zM9 16a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm0-4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zm4.27-8.65a.3.3 0 0 0-.21.1q-.08.07-.06.52V5.8c0 1.12 0 1.68.22 2.1q.3.58.87.88c.43.22.99.22 2.11.22h1.83q.44.01.53-.06.1-.08.09-.21c-.01-.1-.12-.2-.33-.41l-4.64-4.64c-.21-.21-.32-.32-.41-.33" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15 16a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2zM15 12a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2zM13.27 3.35c.1.01.2.12.41.33l4.64 4.64q.32.3.33.41 0 .13-.1.21-.07.08-.52.06H16.2c-1.12 0-1.68 0-2.1-.22a2 2 0 0 1-.88-.87C13 7.48 13 6.92 13 5.8V3.97q-.02-.44.06-.53t.21-.09" />
    </IconBase>
  ))
);

DocumentDetailFillDuotone.displayName = 'DocumentDetailFillDuotone';

// Triple export pattern (lucide-react style)
export { DocumentDetailFillDuotone, DocumentDetailFillDuotone as DocumentDetailFillDuotoneIcon, DocumentDetailFillDuotone as SiDocumentDetailFillDuotone };
export type { DocumentDetailFillDuotoneProps };
