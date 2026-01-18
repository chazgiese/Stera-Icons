import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ReceiptBoldProps = Omit<IconBaseProps, 'children'>;

const ReceiptBold = memo(
  forwardRef<SVGSVGElement, ReceiptBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16 14.5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM16 11a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM16 7.5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M3.91 1a1 1 0 0 1 .44.06l.03.01h.01l.17.1 2.39 1.6 1.92-1.55a1 1 0 0 1 1.26 0L12 2.72l1.88-1.5a1 1 0 0 1 1.24 0l1.93 1.54 2.39-1.59.18-.1h.03a1 1 0 0 1 .49-.06h.06l.16.06h.02l.14.08.03.02q.03 0 .05.03a1 1 0 0 1 .3.37l.03.05.04.15.01.03v.06L21 2v20l-.01.14v.05l-.02.04-.07.2-.02.04-.05.09-.03.04a1 1 0 0 1-.42.32l-.05.02-.04.01-.03.01L20 23h-.1l-.04-.01-.06-.01h-.03l-.06-.02-.04-.02q-.03 0-.05-.02l-.2-.1-2.37-1.58-1.93 1.54a1 1 0 0 1-1.24 0L12 21.28l-1.87 1.5a1 1 0 0 1-1.26 0l-1.92-1.54-2.38 1.58-.19.1-.06.02-.03.02-.06.01-.03.01-.07.01h-.1L4 23l-.26-.04H3.7l-.03-.02q-.02 0-.05-.02l-.18-.09-.07-.05-.17-.18-.03-.04-.05-.1-.02-.03-.07-.2-.01-.04v-.05Q2.98 22.06 3 22V2l.01-.14V1.8l.02-.03q0-.07.04-.15l.03-.05a1 1 0 0 1 .3-.37l.04-.03.04-.02.14-.07.01-.01.17-.05.06-.01zm8.72 3.78a1 1 0 0 1-1.11.1l-.14-.1-1.88-1.5-1.87 1.5a1 1 0 0 1-1.04.13l-.14-.08L5 3.87v16.26l1.45-.96.14-.08a1 1 0 0 1 1.04.13l1.87 1.5 1.88-1.5.14-.1a1 1 0 0 1 1.1.1l1.88 1.5 1.88-1.5.13-.1a1 1 0 0 1 1.04.05l1.45.96V3.87l-1.45.96a1 1 0 0 1-1.04.04l-.14-.09-1.87-1.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ReceiptBold.displayName = 'ReceiptBold';

// Triple export pattern (lucide-react style)
export { ReceiptBold, ReceiptBold as ReceiptBoldIcon, ReceiptBold as SiReceiptBold };
export type { ReceiptBoldProps };
