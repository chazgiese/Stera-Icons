import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CropRegularProps = Omit<IconBaseProps, 'children'>;

const CropRegular = memo(
  forwardRef<SVGSVGElement, CropRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="crop" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6 1.25c.41 0 .75.34.75.75v3.25h8.05q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v8.05H22a.75.75 0 0 1 0 1.5h-3.25V22a.75.75 0 0 1-1.5 0v-3.25H9.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V6.75H2a.75.75 0 0 1 0-1.5h3.25V2c0-.41.34-.75.75-.75m.75 13.55c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h8.05V9.2c0-.57 0-.96-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02H6.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

CropRegular.displayName = 'CropRegular';

// Triple export pattern (lucide-react style)
export { CropRegular, CropRegular as CropRegularIcon, CropRegular as SiCropRegular };
export default CropRegular;
export type { CropRegularProps };
