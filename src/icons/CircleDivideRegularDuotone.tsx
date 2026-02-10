import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-divide-duotone" {...props}>
      <path fill="currentColor" d="M12.75 2.28a9.75 9.75 0 0 1 0 19.44v-1.5a8.25 8.25 0 0 0 0-16.43z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="m12 2.25.75.03v19.44l-.75.03a9.75 9.75 0 1 1 0-19.5m-.77 1.54-.38.04-.33.05-.08.02-.66.15-.1.03-.26.09q-.07 0-.13.04l-.25.09-.1.04-.27.11q-.03 0-.05.03l-.29.13-.1.05-.22.12-.13.07-.22.13-.09.06-.23.15-.06.04q-.7.5-1.27 1.1l-.1.1-.43.51-.05.07-.23.33-.12.17-.1.14a8 8 0 0 0-.69 1.4l-.06.19a8 8 0 0 0-.29 1l-.03.13-.04.24-.03.17-.03.22-.02.17-.02.27a8 8 0 0 0 .02 1.39l.02.14.03.25.03.17.04.24.03.14a8 8 0 0 0 .29 1l.06.17.07.19.25.54.08.15.3.53.1.14.1.17.24.33.05.07q1.01 1.3 2.45 2.11l.06.04q.48.27.99.47H9q.15.07.32.12l.05.02.33.1.03.01.34.1h.03q.55.13 1.14.18V3.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleDivideRegularDuotone.displayName = 'CircleDivideRegularDuotone';

// Triple export pattern (lucide-react style)
export { CircleDivideRegularDuotone, CircleDivideRegularDuotone as CircleDivideRegularDuotoneIcon, CircleDivideRegularDuotone as SiCircleDivideRegularDuotone };
export default CircleDivideRegularDuotone;
export type { CircleDivideRegularDuotoneProps };
