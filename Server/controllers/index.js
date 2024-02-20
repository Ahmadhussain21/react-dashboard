const reportModel = require("../models/index.js");

// function to get all the data
exports.getAllData = async (req, res) => {
    try {
        const allData = await reportModel.find();
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No data found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "All data",
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by year
exports.filteredByYear = async (req, res) => {
    try {
        const { year } = req.params;
        if (year.length !== 4) {
            return res.status(400).json({
                success: false,
                message: "Invalid year",
            })
        }


        // using '$or' operator to which includes multiple conditions
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await reportModel.find({
            $or: [{ start_year: year }, { end_year: year }, { published: { $regex: year, $options: 'i' } },
            { added: { $regex: year, $options: 'i' } }]
        });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by year ${year}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by topics
exports.filteredByTopic = async (req, res) => {
    try {
        const { topic } = req.params;
        if (topic.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid topic",
            })
        }


        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await reportModel.find({ topic: { $regex: topic, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by topic: ${topic}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by title
exports.filteredByTitle = async (req, res) => {
    try {
        const { title } = req.params;
        if (title.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid title",
            })
        }

        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await reportModel.find({ title: { $regex: title, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by title: ${title}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by sector
exports.filteredBySector = async (req, res) => {
    try {
        const { sector } = req.params;
        if (sector.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid sector",
            })
        }

        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await reportModel.find({ sector: { $regex: sector, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by sector: ${sector}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by region
exports.filteredByRegion = async (req, res) => {
    try {
        const { region } = req.params;
        if (region.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid region",
            })
        }

        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await reportModel.find({ region: { $regex: region, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by region: ${region}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by country
exports.filteredByCountry = async (req, res) => {
    try {
        const { country } = req.params;
        if (country.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid country",
            })
        }

        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await reportModel.find({ country: { $regex: country, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by country: ${country}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by pestle
exports.filteredByPestle = async (req, res) => {
    try {
        const { pestle } = req.params;
        if (pestle.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid pestle",
            })
        }

        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await reportModel.find({ pestle: { $regex: pestle, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by pestle: ${pestle}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by source
exports.filteredBySource = async (req, res) => {
    try {
        const { source } = req.params;
        if (source.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid source",
            })
        }

        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await reportModel.find({ source: { $regex: source, $options: 'i' } });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by source: ${source}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by intensity
exports.filteredByIntensity = async (req, res) => {
    try {
        const { intensity } = req.params;
        const allData = await reportModel.find({ intensity: parseInt(intensity) });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by intensity: ${intensity}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by likelihood
exports.filteredByLikelihood = async (req, res) => {
    try {
        const { likelihood } = req.params;
        const allData = await reportModel.find({ likelihood: parseInt(likelihood) });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by likelihood: ${likelihood}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

// function to get data filtered by any
exports.filteredByAny = async (req, res) => {
    try {
        const { search } = req.params;
        if (search.length < 3) {
            return res.status(400).json({
                success: false,
                message: "Invalid search",
            })
        }

        // using '$or' operator to which includes multiple conditions
        // using '$regex' to match the particular field with given input
        // using $options: 'i' to make the search case-insensitive
        const allData = await reportModel.find({
            $or: [{ sector: { $regex: search, $options: 'i' } }, { topic: { $regex: search, $options: 'i' } },
            { insight: { $regex: search, $options: 'i' } }, { title: { $regex: search, $options: 'i' } },
            { pestle: { $regex: search, $options: 'i' } }, { source: { $regex: search, $options: 'i' } },
            { url: { $regex: search, $options: 'i' } }]
        });
        if (!allData || allData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by search ${search}`,
            data: allData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}