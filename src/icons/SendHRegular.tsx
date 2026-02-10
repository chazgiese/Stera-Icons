import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SendHRegularProps = Omit<IconBaseProps, 'children'>;

const SendHRegular = memo(
  forwardRef<SVGSVGElement, SendHRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="send-h" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.08 5.54a1.89 1.89 0 0 1 2.5-2.6l14.72 7.37a1.89 1.89 0 0 1 0 3.38L5.58 21.05a1.89 1.89 0 0 1-2.5-2.59L6.6 12zM4.9 4.29a.39.39 0 0 0-.52.53l3.51 6.43H13a.75.75 0 0 1 0 1.5H7.9l-3.5 6.43c-.19.33.17.7.5.53l14.73-7.36a.39.39 0 0 0 0-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

SendHRegular.displayName = 'SendHRegular';

// Triple export pattern (lucide-react style)
export { SendHRegular, SendHRegular as SendHRegularIcon, SendHRegular as SiSendHRegular };
export default SendHRegular;
export type { SendHRegularProps };
