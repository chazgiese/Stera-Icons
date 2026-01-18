import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CanLabelBoldProps = Omit<IconBaseProps, 'children'>;

const CanLabelBold = memo(
  forwardRef<SVGSVGElement, CanLabelBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 2a1 1 0 0 1 .21 1.98l.37.64A7 7 0 0 1 19 8.09v7.82a7 7 0 0 1-.92 3.47l-.64 1.1a3 3 0 0 1-2.6 1.52H9.16a3 3 0 0 1-2.6-1.51l-.64-1.11A7 7 0 0 1 5 15.91V8.09a7 7 0 0 1 .92-3.47l.37-.64A1 1 0 0 1 6.5 2zM7.46 18l.2.39.63 1.1c.18.32.51.51.87.51h5.68a1 1 0 0 0 .87-.5l.63-1.11.2-.39zM7 8.1V16h10V8H7zm.66-2.49-.2.39h9.08l-.2-.39L15.42 4H8.58z" clipRule="evenodd" />
    </IconBase>
  ))
);

CanLabelBold.displayName = 'CanLabelBold';

// Triple export pattern (lucide-react style)
export { CanLabelBold, CanLabelBold as CanLabelBoldIcon, CanLabelBold as SiCanLabelBold };
export type { CanLabelBoldProps };
