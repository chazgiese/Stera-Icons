import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PencilTipFillProps = Omit<IconBaseProps, 'children'>;

const PencilTipFill = memo(
  forwardRef<SVGSVGElement, PencilTipFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pencil-tip-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1c.3 0 .6.14.79.39l6.37 8.18a4 4 0 0 1 .84 2.46V22a1 1 0 0 1-1 1h-6V12.72l-.5-.28a1 1 0 0 0-1 0l-.5.28V23H5a1 1 0 0 1-1-1v-9.97a4 4 0 0 1 .84-2.46l6.37-8.18.08-.09A1 1 0 0 1 12 1m2.03 5.24a3.8 3.8 0 0 1-4.06 0L6.5 10.7l1.5.86a1 1 0 0 0 1 0l1.51-.86a3 3 0 0 1 2.98 0l1.51.86a1 1 0 0 0 1 0l1.5-.86z" clipRule="evenodd" />
    </IconBase>
  ))
);

PencilTipFill.displayName = 'PencilTipFill';

// Triple export pattern (lucide-react style)
export { PencilTipFill, PencilTipFill as PencilTipFillIcon, PencilTipFill as SiPencilTipFill };
export default PencilTipFill;
export type { PencilTipFillProps };
