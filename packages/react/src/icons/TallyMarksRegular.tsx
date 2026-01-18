import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TallyMarksRegularProps = Omit<IconBaseProps, 'children'>;

const TallyMarksRegular = memo(
  forwardRef<SVGSVGElement, TallyMarksRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6 3.25a.75.75 0 0 0-.75.75v11.17l-3.64 2.19a.75.75 0 0 0 .77 1.28l2.87-1.72V20a.75.75 0 0 0 1.5 0v-3.98l2.5-1.5V20a.75.75 0 0 0 1.5 0v-6.38l2.5-1.5V20a.75.75 0 1 0 1.5 0v-8.78l2.5-1.5V20a.75.75 0 1 0 1.5 0V8.83l3.64-2.19a.75.75 0 0 0-.78-1.28l-2.86 1.72V4a.75.75 0 0 0-1.5 0v3.98l-2.5 1.5V4a.75.75 0 0 0-1.5 0v6.38l-2.5 1.5V4a.75.75 0 0 0-1.5 0v8.77l-2.5 1.5V4A.75.75 0 0 0 6 3.25" />
    </IconBase>
  ))
);

TallyMarksRegular.displayName = 'TallyMarksRegular';

// Triple export pattern (lucide-react style)
export { TallyMarksRegular, TallyMarksRegular as TallyMarksRegularIcon, TallyMarksRegular as SiTallyMarksRegular };
export type { TallyMarksRegularProps };
