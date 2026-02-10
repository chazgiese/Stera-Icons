import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayRegularProps = Omit<IconBaseProps, 'children'>;

const PlayRegular = memo(
  forwardRef<SVGSVGElement, PlayRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="play" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6.16 2.16c.61-.06 1.21.13 1.84.42q.93.45 2.38 1.3l7 4.03q1.46.82 2.31 1.4c.57.4 1.03.82 1.28 1.37.37.84.37 1.8 0 2.64-.25.55-.71.97-1.28 1.37q-.85.58-2.3 1.4l-7.01 4.04q-1.45.84-2.38 1.3c-.63.28-1.23.47-1.84.4a3.3 3.3 0 0 1-2.29-1.3 3.5 3.5 0 0 1-.56-1.8q-.07-1.03-.06-2.7V7.97q-.02-1.66.06-2.7c.07-.68.2-1.3.56-1.78a3.3 3.3 0 0 1 2.3-1.32m.16 1.5c-.5.05-.95.3-1.24.7-.11.16-.22.44-.27 1.05-.06.6-.06 1.4-.06 2.55v8.08c0 1.14 0 1.95.06 2.55.05.61.16.89.27 1.05.3.4.74.66 1.24.7.2.03.5-.02 1.05-.28.56-.26 1.26-.66 2.26-1.23l7-4.04c1-.57 1.7-.98 2.2-1.33s.69-.58.77-.76c.2-.44.2-.96 0-1.4-.08-.18-.27-.41-.77-.76s-1.2-.76-2.2-1.33l-7-4.04c-1-.57-1.7-.97-2.26-1.23s-.85-.3-1.05-.29" clipRule="evenodd" />
    </IconBase>
  ))
);

PlayRegular.displayName = 'PlayRegular';

// Triple export pattern (lucide-react style)
export { PlayRegular, PlayRegular as PlayRegularIcon, PlayRegular as SiPlayRegular };
export default PlayRegular;
export type { PlayRegularProps };
