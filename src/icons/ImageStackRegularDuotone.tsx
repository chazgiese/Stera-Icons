import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImageStackRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageStackRegularDuotone = memo(
  forwardRef<SVGSVGElement, ImageStackRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-stack-duotone" {...props}>
      <path fill="currentColor" d="M15.4 2.25q1.44-.01 2.36.05.93.05 1.67.41c.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.93.05 2.36v2.8q.01 1.44-.05 2.36a4 4 0 0 1-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41h-.06q.05-.64.05-1.5c.47-.05.76-.13 1-.25q.8-.4 1.2-1.2c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24V8.6c0-1 0-1.7-.04-2.24a3 3 0 0 0-.26-1.1 2.8 2.8 0 0 0-1.2-1.21 3 3 0 0 0-1.11-.26c-.55-.04-1.25-.04-2.24-.04h-2.8c-1 0-1.7 0-2.24.04a3 3 0 0 0-1.1.26q-.8.4-1.21 1.2c-.12.24-.2.53-.24 1q-.88 0-1.51.05v-.06q.05-.93.41-1.67c.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.92-.06 2.36-.05z" opacity={.4} />
        <path fill="currentColor" d="M12.5 10a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M11.4 6.25q1.44-.01 2.36.05c.63.05 1.17.16 1.67.41.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.92.05 2.36v2.8q.01 1.44-.05 2.36a4 4 0 0 1-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.92.06-2.36.05H8.6q-1.44.01-2.36-.05a4 4 0 0 1-1.67-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.67q-.06-.92-.05-2.36v-2.8q-.01-1.44.05-2.36.05-.93.41-1.67c.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.93-.06 2.36-.05zm-3.17 8.16a1 1 0 0 0-.46 0 1 1 0 0 0-.27.18q-.22.19-.67.64l-2.96 2.96q.07.33.18.56.4.8 1.2 1.2c.25.13.58.21 1.11.26.55.04 1.25.04 2.24.04h2.8c1 0 1.7 0 2.24-.04l.45-.06-4.92-4.92q-.43-.44-.67-.64a1 1 0 0 0-.27-.18m.37-6.66c-1 0-1.7 0-2.24.04a3 3 0 0 0-1.1.26q-.8.4-1.21 1.2a3 3 0 0 0-.26 1.11c-.04.55-.04 1.25-.04 2.24v3.59l2.02-2.02q.44-.45.76-.73.33-.3.77-.46.7-.23 1.4 0 .44.16.77.46.33.29.76.73l5.24 5.24q.3-.3.48-.66c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24v-2.8c0-1 0-1.7-.04-2.24a3 3 0 0 0-.26-1.1 2.8 2.8 0 0 0-1.2-1.21 3 3 0 0 0-1.11-.26c-.55-.04-1.25-.04-2.24-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageStackRegularDuotone.displayName = 'ImageStackRegularDuotone';

// Triple export pattern (lucide-react style)
export { ImageStackRegularDuotone, ImageStackRegularDuotone as ImageStackRegularDuotoneIcon, ImageStackRegularDuotone as SiImageStackRegularDuotone };
export type { ImageStackRegularDuotoneProps };
