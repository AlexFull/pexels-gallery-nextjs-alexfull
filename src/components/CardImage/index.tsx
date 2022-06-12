import Image from 'next/image';
import { useState } from 'react';

import { Close } from '@styled-icons/evil/Close';
import { Download } from '@styled-icons/feather/Download';

import {
    CardImageWrapper,
    ModalOverlay,
    Modal,
    BtnCloseModal,
    ImagePreview,
    ImageModal,
    ModalDetails,
    BtnDownload,
    Loading,
} from './styles';
import Link from 'next/link';
import { useLockedBody } from 'usehooks-ts';
import ToolTips from 'components/tooltips';

export interface CardImageProps {
    id?: string;
    photographer?: string;
    photographer_url?: string;
    url?: string;
    alt?: string;
    width?: string;
    height?: string;
    avg_color?: string;
    src?: {
        original?: string;
        large?: string;
        medium?: string;
        small?: string;
        landscape?: string;
    };
    pageNumber?: number;
}

const CardImage: React.FC<CardImageProps> = ({
    id,
    photographer,
    photographer_url,
    url,
    width,
    height,
    src,
    alt,
    avg_color,
}) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const [locked, setLocked] = useState(false);

    const toggleLocked = () => {
        setLocked((prev) => !prev);
        setShowModal((prev) => !prev);
    };

    useLockedBody(locked);

    return (
        <CardImageWrapper>
            <ImagePreview onClick={toggleLocked}>
                <Image layout="responsive" objectFit="cover" width={1600} height={900} src={src.medium} alt={alt} />
            </ImagePreview>

            {showModal && (
                <ModalOverlay avg_color={avg_color}>
                    <Modal>
                        <BtnCloseModal onClick={toggleLocked}>
                            <ToolTips content="Close" position="left" offset={5}>
                                <Close size={42} color={'white'} />
                            </ToolTips>
                        </BtnCloseModal>

                        <ImageModal avg_color={avg_color}>
                            <Image width={width} height={height} src={src.original} alt={alt} />
                            <Loading />
                        </ImageModal>
                        <ModalDetails avg_color={avg_color}>
                            <div>
                                {!!alt && <p>{alt}</p>}
                                <Link href={photographer_url}>
                                    <a target="_blank">
                                        <ToolTips content="Go to perfil" position="right" offset={15}>
                                            <h3>
                                                <span>By</span>
                                                {photographer}
                                            </h3>
                                        </ToolTips>
                                    </a>
                                </Link>
                            </div>

                            <Link href={url} passHref>
                                <BtnDownload target="_blank" avg_color={avg_color}>
                                    <ToolTips content="Download" position="left" offset={15}>
                                        <Download size={36} color="black" />
                                    </ToolTips>
                                </BtnDownload>
                            </Link>
                        </ModalDetails>
                    </Modal>
                </ModalOverlay>
            )}
        </CardImageWrapper>
    );
};

export default CardImage;
