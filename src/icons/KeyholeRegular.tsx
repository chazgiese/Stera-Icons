import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KeyholeRegularProps = Omit<IconBaseProps, 'children'>;

const KeyholeRegular = memo(
  forwardRef<SVGSVGElement, KeyholeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="keyhole" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25A6.25 6.25 0 0 1 16.34 13l2.43 4.86a2 2 0 0 1-1.8 2.89H7.03a2 2 0 0 1-1.79-2.9L7.66 13A6.23 6.23 0 0 1 12 2.25m0 1.5a4.75 4.75 0 0 0-2.94 8.48c.28.22.36.6.2.92l-2.68 5.38a.5.5 0 0 0 .44.72h9.96a.5.5 0 0 0 .45-.72l-2.7-5.38a.75.75 0 0 1 .21-.92A4.74 4.74 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyholeRegular.displayName = 'KeyholeRegular';

// Triple export pattern (lucide-react style)
export { KeyholeRegular, KeyholeRegular as KeyholeRegularIcon, KeyholeRegular as SiKeyholeRegular };
export default KeyholeRegular;
export type { KeyholeRegularProps };
