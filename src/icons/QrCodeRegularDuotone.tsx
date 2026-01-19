import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type QrCodeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const QrCodeRegularDuotone = memo(
  forwardRef<SVGSVGElement, QrCodeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="qr-code-duotone" {...props}>
      <path fillRule="evenodd" d="M8.75 13.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5c0-1.1.9-2 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v4.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5zM19.75 2.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5c0-1.1.9-2 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v4.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" opacity={0.4} />
        <path d="M6.5 5.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M8.75 2.25a2 2 0 0 1 2 2v4.5a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2v-4.5c0-1.1.9-2 2-2zm-4.5 1.5a.5.5 0 0 0-.5.5v4.5c0 .28.22.5.5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
        <path fill="currentColor" d="M16.08 20.8c0 .53-.42.95-.94.95h-.95a.94.94 0 0 1-.94-.94v-.95c0-.52.42-.94.94-.94h1.9zM20.8 18.92c.53 0 .95.42.95.94v.95c0 .52-.42.94-.94.94h-.95a.94.94 0 0 1-.94-.94v-1.9z" />
        <path fill="currentColor" d="M18.92 18.92h-2.84v-2.84h2.84zM15.14 13.25c.52 0 .94.42.94.94v1.9H14.2a.94.94 0 0 1-.94-.95v-.95c0-.52.42-.94.94-.94zM20.8 13.25c.53 0 .95.42.95.94v.95c0 .52-.42.94-.94.94h-1.9V14.2c0-.52.43-.94.95-.94z" />
    </IconBase>
  ))
);

QrCodeRegularDuotone.displayName = 'QrCodeRegularDuotone';

// Triple export pattern (lucide-react style)
export { QrCodeRegularDuotone, QrCodeRegularDuotone as QrCodeRegularDuotoneIcon, QrCodeRegularDuotone as SiQrCodeRegularDuotone };
export default QrCodeRegularDuotone;
export type { QrCodeRegularDuotoneProps };
