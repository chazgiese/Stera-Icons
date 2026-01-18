import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TallyMarksFillProps = Omit<IconBaseProps, 'children'>;

const TallyMarksFill = memo(
  forwardRef<SVGSVGElement, TallyMarksFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6 2.5c-.83 0-1.5.67-1.5 1.5v10.75l-3.27 1.96a1.5 1.5 0 0 0 1.54 2.58l1.73-1.04V20a1.5 1.5 0 0 0 3 0v-3.55l1-.6V20a1.5 1.5 0 0 0 3 0v-5.95l1-.6V20a1.5 1.5 0 0 0 3 0v-8.35l1-.6V20a1.5 1.5 0 0 0 3 0V9.25l3.27-1.96a1.5 1.5 0 0 0-1.54-2.58L19.5 5.75V4a1.5 1.5 0 0 0-3 0v3.55l-1 .6V4a1.5 1.5 0 0 0-3 0v5.95l-1 .6V4a1.5 1.5 0 0 0-3 0v8.35l-1 .6V4c0-.83-.67-1.5-1.5-1.5" />
    </IconBase>
  ))
);

TallyMarksFill.displayName = 'TallyMarksFill';

// Triple export pattern (lucide-react style)
export { TallyMarksFill, TallyMarksFill as TallyMarksFillIcon, TallyMarksFill as SiTallyMarksFill };
export type { TallyMarksFillProps };
