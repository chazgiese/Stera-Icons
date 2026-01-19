import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SoccerFieldRegularProps = Omit<IconBaseProps, 'children'>;

const SoccerFieldRegular = memo(
  forwardRef<SVGSVGElement, SoccerFieldRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-field" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M20 3.25A2.75 2.75 0 0 1 22.75 6v12A2.75 2.75 0 0 1 20 20.75H4A2.75 2.75 0 0 1 1.25 18V6A2.75 2.75 0 0 1 4 3.25zm-7.25 5.59a3.25 3.25 0 0 1 0 6.32v4.09H20c.69 0 1.25-.56 1.25-1.25v-2.25H18.5a.75.75 0 0 1-.75-.75V9c0-.41.34-.75.75-.75h2.75V6c0-.69-.56-1.25-1.25-1.25h-7.25zM4 4.75c-.69 0-1.25.56-1.25 1.25v2.25H5.5c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75H2.75V18c0 .69.56 1.25 1.25 1.25h7.25v-4.09a3.25 3.25 0 0 1 0-6.32V4.75zm-1.25 9.5h2v-4.5h-2zm16.5 0h2v-4.5h-2zm-7.25-4a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerFieldRegular.displayName = 'SoccerFieldRegular';

// Triple export pattern (lucide-react style)
export { SoccerFieldRegular, SoccerFieldRegular as SoccerFieldRegularIcon, SoccerFieldRegular as SiSoccerFieldRegular };
export default SoccerFieldRegular;
export type { SoccerFieldRegularProps };
