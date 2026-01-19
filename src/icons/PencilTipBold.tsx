import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilTipBoldProps = Omit<IconBaseProps, 'children'>;

const PencilTipBold = memo(
  forwardRef<SVGSVGElement, PencilTipBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-tip-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c.3 0 .6.14.79.39l6.37 8.18a4 4 0 0 1 .84 2.46V22a1 1 0 1 1-2 0v-9.28l-1.01.58a3 3 0 0 1-2.98 0L13 12.72V22a1 1 0 1 1-2 0v-9.28l-1.01.58a3 3 0 0 1-2.98 0L6 12.72V22a1 1 0 0 1-2 0v-9.97a4 4 0 0 1 .84-2.46l6.37-8.18.08-.09A1 1 0 0 1 12 1m2.43 5.75a5 5 0 0 1-4.86 0L6.5 10.7l1.5.86a1 1 0 0 0 1 0l1.51-.86a3 3 0 0 1 2.98 0l1.51.86a1 1 0 0 0 1 0l1.5-.86zm-3.6-1.61a3 3 0 0 0 2.34 0L12 3.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilTipBold.displayName = 'PencilTipBold';

// Triple export pattern (lucide-react style)
export { PencilTipBold, PencilTipBold as PencilTipBoldIcon, PencilTipBold as SiPencilTipBold };
export type { PencilTipBoldProps };
