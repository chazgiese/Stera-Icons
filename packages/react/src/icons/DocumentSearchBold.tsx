import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type DocumentSearchBoldProps = Omit<IconBaseProps, 'children'>;

const DocumentSearchBold = memo(
  forwardRef<SVGSVGElement, DocumentSearchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 12.5a4.5 4.5 0 0 1 3.94 6.67l1.94 1.95a1.25 1.25 0 0 1-1.76 1.76l-1.95-1.94q-.97.55-2.17.56a4.5 4.5 0 1 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
        <path fill="currentColor" d="M15.94 1.5q.43 0 .78.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37q.05.7.04 1.72v5a1 1 0 1 1-2 0v-5c0-.72 0-1.2-.03-1.56a2 2 0 0 0-.13-.62 1.5 1.5 0 0 0-.66-.66c-.1-.05-.26-.1-.62-.13l-.65-.03H9c-.72 0-1.2 0-1.56.03s-.52.08-.62.13a1.5 1.5 0 0 0-.66.66c-.05.1-.1.26-.13.62C6 5.3 6 5.78 6 6.5v10c0 .72 0 1.2.03 1.56s.08.52.13.62q.23.43.66.66c.1.05.26.1.62.13.37.03.84.03 1.56.03h1a1 1 0 1 1 0 2H9q-1.03.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37q-.05-.7-.04-1.72v-10q-.01-1.02.04-1.72c.04-.48.12-.94.34-1.37a3.5 3.5 0 0 1 1.53-1.53c.43-.22.89-.3 1.37-.34q.7-.05 1.72-.04h6.94" />
        <path fill="currentColor" d="M15 9a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM15 5.5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

DocumentSearchBold.displayName = 'DocumentSearchBold';

export { DocumentSearchBold };
export type { DocumentSearchBoldProps };
