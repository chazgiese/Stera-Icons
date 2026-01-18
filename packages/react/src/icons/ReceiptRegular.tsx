import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ReceiptRegularProps = Omit<IconBaseProps, 'children'>;

const ReceiptRegular = memo(
  forwardRef<SVGSVGElement, ReceiptRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16 14.75a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM16 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM16 7.75a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="m4 1.25.14.01.06.02q.12.03.22.1l2.54 1.7L9.03 1.4a.75.75 0 0 1 .94 0L12 3.04l2.03-1.63a.75.75 0 0 1 .94 0l2.07 1.66 2.54-1.7.22-.09.06-.02a1 1 0 0 1 .28 0l.04.01.1.04q.04 0 .06.03.04 0 .07.04l.08.05a1 1 0 0 1 .2.26v.02a1 1 0 0 1 .06.29v20a1 1 0 0 1-.06.29v.01l-.07.11v.02a1 1 0 0 1-.3.24l-.03.02-.06.02-.22.04H20l-.13-.01h-.01l-.1-.03-.05-.02h-.01l-.12-.07-2.54-1.7-2.07 1.67a.75.75 0 0 1-.94 0L12 20.96 9.97 22.6a.75.75 0 0 1-.94 0l-2.07-1.66-2.54 1.7-.12.06h-.01l-.06.02-.09.03-.14.01-.23-.04-.06-.02-.04-.02a.7.7 0 0 1-.36-.37v-.02a1 1 0 0 1-.06-.28V2a1 1 0 0 1 .06-.29V1.7l.07-.1q.05-.09.13-.16l.07-.05.08-.04.05-.03.1-.04h.04q.07-.02.15-.02m8.47 3.34a.8.8 0 0 1-.83.07l-.1-.07L9.5 2.96 7.47 4.6a.8.8 0 0 1-.78.1l-.1-.07L4.74 3.4v17.2l1.83-1.22.1-.06a.8.8 0 0 1 .79.1l2.03 1.62 2.03-1.63.1-.07a.8.8 0 0 1 .84.07l2.03 1.63 2.03-1.63.1-.06a.8.8 0 0 1 .79.03l1.83 1.22V3.4l-1.83 1.22a.8.8 0 0 1-.79.03l-.1-.06-2.03-1.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReceiptRegular.displayName = 'ReceiptRegular';

// Triple export pattern (lucide-react style)
export { ReceiptRegular, ReceiptRegular as ReceiptRegularIcon, ReceiptRegular as SiReceiptRegular };
export type { ReceiptRegularProps };
