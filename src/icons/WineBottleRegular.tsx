import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleRegularProps = Omit<IconBaseProps, 'children'>;

const WineBottleRegular = memo(
  forwardRef<SVGSVGElement, WineBottleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-bottle" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.5 2.25a2 2 0 0 1 2 2V8.5q-.01.08.1.23.15.15.42.28A3.3 3.3 0 0 1 17 12v7a2.75 2.75 0 0 1-2.75 2.75h-4.5A2.75 2.75 0 0 1 7 19v-7c0-1.35.82-2.5 1.98-3q.27-.11.41-.27c.1-.1.11-.18.11-.23V4.25c0-1.1.9-2 2-2zm-1 1.5a.5.5 0 0 0-.5.5V8.5c0 1-.82 1.63-1.43 1.89-.63.26-1.07.89-1.07 1.61v7c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25v-7c0-.72-.44-1.35-1.07-1.61C13.82 10.13 13 9.5 13 8.5V4.25a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

WineBottleRegular.displayName = 'WineBottleRegular';

// Triple export pattern (lucide-react style)
export { WineBottleRegular, WineBottleRegular as WineBottleRegularIcon, WineBottleRegular as SiWineBottleRegular };
export default WineBottleRegular;
export type { WineBottleRegularProps };
