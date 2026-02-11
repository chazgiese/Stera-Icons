import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ImageLandscapeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImageLandscapeRegularDuotone = memo(
  forwardRef<SVGSVGElement, ImageLandscapeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="image-landscape-duotone" {...props}>
      <path fillRule="evenodd" d="M16.2 4.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v4.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V9.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-8.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v4.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V9.8c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M6.09 10.35a2 2 0 0 1 2.82 0l4.24 4.24c.2.2.5.2.7 0l1.24-1.24a2 2 0 0 1 2.82 0l2.32 2.32q0 .24-.02.44c-.04.45-.1.71-.2.91q-.1.18-.22.33l-2.94-2.94a.5.5 0 0 0-.7 0l-1.24 1.24a2 2 0 0 1-2.82 0L7.85 11.4a.5.5 0 0 0-.7 0l-3.4 3.4v-2.12zM15 7.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ImageLandscapeRegularDuotone.displayName = 'ImageLandscapeRegularDuotone';

// Triple export pattern (lucide-react style)
export { ImageLandscapeRegularDuotone, ImageLandscapeRegularDuotone as ImageLandscapeRegularDuotoneIcon, ImageLandscapeRegularDuotone as SiImageLandscapeRegularDuotone };
export default ImageLandscapeRegularDuotone;
export type { ImageLandscapeRegularDuotoneProps };
