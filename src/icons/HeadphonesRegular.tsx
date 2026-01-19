import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HeadphonesRegularProps = Omit<IconBaseProps, 'children'>;

const HeadphonesRegular = memo(
  forwardRef<SVGSVGElement, HeadphonesRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="headphones" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.3 1.25c3.11.09 5.9 1.5 7.8 3.69 1.73 1.98 2.24 4.42 2.2 6.89-.03 2.45-.61 5.02-1.12 7.33-.1.4-.5.66-.9.57q-.03 0-.06-.02l-.07.33a2.75 2.75 0 0 1-5.37-1.19l.65-2.93a2.75 2.75 0 0 1 5.04-.81q.3-1.69.33-3.3c.04-2.26-.43-4.28-1.83-5.89a9.2 9.2 0 0 0-6.45-3.16L12 2.75l-.52.01a9.2 9.2 0 0 0-6.45 3.16c-1.4 1.6-1.87 3.63-1.83 5.88q.03 1.63.33 3.3a2.74 2.74 0 0 1 5.04.82l.65 2.93a2.75 2.75 0 1 1-5.37 1.2l-.07-.34-.06.02a.75.75 0 0 1-.9-.57c-.51-2.3-1.09-4.88-1.12-7.33-.04-2.47.46-4.9 2.2-6.9A10.7 10.7 0 0 1 12 1.26zm-5.2 15a1.25 1.25 0 0 0-2.43.54l.65 2.93a1.25 1.25 0 0 0 2.44-.54zm11.28-.95a1.25 1.25 0 0 0-1.49.95l-.65 2.93a1.25 1.25 0 0 0 2.44.54l.65-2.93a1.25 1.25 0 0 0-.95-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

HeadphonesRegular.displayName = 'HeadphonesRegular';

// Triple export pattern (lucide-react style)
export { HeadphonesRegular, HeadphonesRegular as HeadphonesRegularIcon, HeadphonesRegular as SiHeadphonesRegular };
export default HeadphonesRegular;
export type { HeadphonesRegularProps };
