import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QrCodeRegularProps = Omit<IconBaseProps, 'children'>;

const QrCodeRegular = memo(
  forwardRef<SVGSVGElement, QrCodeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="qr-code" {...props}>
      <path fillRule="evenodd" d="M8.75 13.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5c0-1.1.9-2 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v4.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
        <path d="M16.08 20.8c0 .53-.42.95-.94.95h-.95a.94.94 0 0 1-.94-.94v-.95c0-.52.42-.94.94-.94h1.9zM20.8 18.92c.53 0 .95.42.95.94v.95c0 .52-.42.94-.94.94h-.95a.94.94 0 0 1-.94-.94v-1.9z" />
        <path d="M18.92 18.92h-2.84v-2.84h2.84zM15.14 13.25c.52 0 .94.42.94.94v1.9H14.2a.94.94 0 0 1-.94-.95v-.95c0-.52.42-.94.94-.94zM20.8 13.25c.53 0 .95.42.95.94v.95c0 .52-.42.94-.94.94h-1.9V14.2c0-.52.43-.94.95-.94zM6.5 5.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fillRule="evenodd" d="M8.75 2.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5c0-1.1.9-2 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v4.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5zM19.75 2.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5c0-1.1.9-2 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v4.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

QrCodeRegular.displayName = 'QrCodeRegular';

// Triple export pattern (lucide-react style)
export { QrCodeRegular, QrCodeRegular as QrCodeRegularIcon, QrCodeRegular as SiQrCodeRegular };
export default QrCodeRegular;
export type { QrCodeRegularProps };
