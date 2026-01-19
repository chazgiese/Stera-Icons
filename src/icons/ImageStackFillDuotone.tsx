import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImageStackFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageStackFillDuotone = memo(
  forwardRef<SVGSVGElement, ImageStackFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-stack-fill-duotone" {...props}>
      <path fill="currentColor" d="M15.4 2q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v2.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97c-.5.25-1.02.36-1.6.42v-.15q.07-.94.06-2.38v-2.8q.01-1.44-.05-2.38a5 5 0 0 0-.44-1.76 4.5 4.5 0 0 0-1.97-1.97 5 5 0 0 0-1.76-.44Q12.84 6 11.4 6H8.6q-1.44-.01-2.38.05l-.15.02c.06-.59.17-1.12.42-1.61a4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q11.16 2 12.6 2z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11.4 6q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v2.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H8.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q2 16.84 2 15.4v-2.8q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q7.16 6 8.6 6zm-2.93 6.47a2 2 0 0 0-1.09.04c-.29.1-.51.26-.68.4q-.25.22-.54.51L4 15.6c0 .9 0 1.53.04 2.03.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04h2.8c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23q.49-.26.83-.68l-5.62-5.63q-.29-.29-.54-.5a2 2 0 0 0-.48-.33l-.2-.08zM12.5 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

ImageStackFillDuotone.displayName = 'ImageStackFillDuotone';

// Triple export pattern (lucide-react style)
export { ImageStackFillDuotone, ImageStackFillDuotone as ImageStackFillDuotoneIcon, ImageStackFillDuotone as SiImageStackFillDuotone };
export default ImageStackFillDuotone;
export type { ImageStackFillDuotoneProps };
