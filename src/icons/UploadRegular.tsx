import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UploadRegularProps = Omit<IconBaseProps, 'children'>;

const UploadRegular = memo(
  forwardRef<SVGSVGElement, UploadRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="upload" {...props}>
      <path fill="currentColor" d="M21 14.25c.41 0 .75.34.75.75q.01 1.37-.04 2.24t-.32 1.58a4.8 4.8 0 0 1-2.57 2.57q-.7.28-1.58.32-.87.05-2.24.04H9q-1.37.01-2.24-.04c-.6-.04-1.1-.13-1.58-.32a4.8 4.8 0 0 1-2.57-2.57c-.2-.48-.28-.99-.32-1.58q-.05-.87-.04-2.24a.75.75 0 0 1 1.5 0c0 .94 0 1.61.04 2.14.03.52.1.84.2 1.1.34.8.97 1.43 1.77 1.76.26.11.58.18 1.1.21.53.04 1.2.04 2.14.04h6c.94 0 1.61 0 2.14-.04.52-.03.84-.1 1.1-.2.8-.34 1.43-.97 1.76-1.77.11-.26.18-.58.21-1.1.04-.53.04-1.2.04-2.14 0-.41.34-.75.75-.75" />
        <path fill="currentColor" d="M11.53 2.42a.75.75 0 0 1 1 .05l6 6a.75.75 0 0 1-1.06 1.06l-4.72-4.72V16a.75.75 0 0 1-1.5 0V4.81L6.53 9.53a.75.75 0 1 1-1.06-1.06l6-6z" />
    </IconBase>
  ))
);

UploadRegular.displayName = 'UploadRegular';

// Triple export pattern (lucide-react style)
export { UploadRegular, UploadRegular as UploadRegularIcon, UploadRegular as SiUploadRegular };
export default UploadRegular;
export type { UploadRegularProps };
